// src/components/DynamicTeamFormWithZod.tsx
import React from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const memberSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  role: z.string().min(1, "Role is required"),
})

const projectSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  teamMembers: z.array(memberSchema).min(1, "At least one team member is required"),
})

type ProjectForm = z.infer<typeof projectSchema>

export default function DynamicTeamFormWithZod() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProjectForm>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectName: "",
      teamMembers: [{ name: "", email: "", role: "" }],
    },
    mode: "onTouched",
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "teamMembers",
  })

  const onSubmit = async (data: ProjectForm) => {
    await new Promise((r) => setTimeout(r, 700))
    console.log("Submitted project:", data)
    alert("Project submitted — cek console.")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto p-6 space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1">Project name</label>
        <Input {...register("projectName")} placeholder="Project name" />
        {errors.projectName && (
          <p className="text-sm text-red-600 mt-1">{errors.projectName.message}</p>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Team Members</h3>
          <Button
            type="button"
            variant="outline"
            onClick={() => append({ name: "", email: "", role: "" })}
          >
            + Add member
          </Button>
        </div>

        {errors.teamMembers && typeof errors.teamMembers?.message === "string" && (
          <p className="text-sm text-red-600">{errors.teamMembers?.message}</p>
        )}

        {fields.map((field, index) => (
          <div key={field.id} className="p-4 border rounded-md space-y-3">
            <div className="flex justify-between items-start">
              <strong>Member {index + 1}</strong>
              <div className="space-x-2">
                {fields.length > 1 && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="text-sm mb-1 block">Full name</label>
                <Input {...register(`teamMembers.${index}.name` as const)} placeholder="Name" />
                {errors.teamMembers?.[index]?.name && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.teamMembers[index]?.name?.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm mb-1 block">Email</label>
                <Input {...register(`teamMembers.${index}.email` as const)} placeholder="Email" />
                {errors.teamMembers?.[index]?.email && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.teamMembers[index]?.email?.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm mb-1 block">Role</label>
                <Input {...register(`teamMembers.${index}.role` as const)} placeholder="Role" />
                {errors.teamMembers?.[index]?.role && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.teamMembers[index]?.role?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Create Project"}
        </Button>
      </div>
    </form>
  )
}
