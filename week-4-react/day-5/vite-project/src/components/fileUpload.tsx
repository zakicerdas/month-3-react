import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type FormValues = {
  title: string
  file: FileList | null
  description: string
}

export default function FileUploadRealtimeForm() {
  const { register, handleSubmit, watch, setError, clearErrors, formState: { errors, isSubmitting, isValid } } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: { title: "", file: null, description: "" }
  })

  const fileList = watch("file")
  const [preview, setPreview] = useState<string | null>(null)


  useEffect(() => {
    if (fileList && fileList.length > 0) {
      const f = fileList[0]
      if (!f.type.startsWith("image/")) {
        setPreview(null)
        setError("file", { type: "manual", message: "Only images allowed for preview" })
        return
      }
      clearErrors("file")
      const reader = new FileReader()
      reader.onload = (e) => setPreview(e.target?.result as string)
      reader.readAsDataURL(f)
      return () => {}
    } else {
      setPreview(null)
      clearErrors("file")
    }
  }, [fileList, setError, clearErrors])

  const onSubmit = async (data: FormValues) => {
  
    const fd = new FormData()
    fd.append("title", data.title)
    fd.append("description", data.description)
    if (data.file && data.file.length > 0) fd.append("file", data.file[0])


    await new Promise((r) => setTimeout(r, 1000))
    console.log("Upload payload:", fd.get("title"), fd.get("file"))
    alert("File uploaded. Check console.")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4 space-y-4">
      <Input {...register("title", { required: "Title is required", minLength: { value: 3, message: "Min 3 chars" } })} placeholder="Document title" />
      {errors.title && <p className="text-sm text-red-600">{errors.title.message}</p>}

      <div>
        <label className="block text-sm mb-1">File (image/pdf)</label>
        <Input {...register("file", { required: "File required" })} type="file" accept="image/*,.pdf,.doc,.docx" />
        {errors.file && <p className="text-sm text-red-600">{errors.file.message}</p>}
      </div>

      {preview && (
        <div className="mt-2">
          <img src={preview} alt="preview" className="max-h-56 rounded-md object-cover" />
        </div>
      )}

      <textarea {...register("description", { maxLength: { value: 500, message: "Max 500 chars" } })} placeholder="Description (optional)" className="w-full p-2 border rounded-md min-h-[80px]" />
      {errors.description && <p className="text-sm text-red-600">{errors.description.message}</p>}

      <Button type="submit" disabled={isSubmitting || !isValid} className="w-full">
        {isSubmitting ? "Uploading..." : "Upload"}
      </Button>
    </form>
  )
}
