import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export type GachaBanner = {
  id: number;
  card_type: string;
  image_url: string;
  default_rarity?: number;
  pickups: { chara_data: { name_en: string; thumb_img: string }; title_en?: string }[];
};

export const fetchGacha = createAsyncThunk<GachaBanner[]>(
  'gacha/fetchGacha',
  async () => {
    const res = await fetch('https://umapyoi.net/api/v1/gacha/current'); 
    if (!res.ok) throw new Error('Gagal fetch data');
    return (await res.json()) as GachaBanner[];
  }
);

const gachaSlice = createSlice({
  name: 'gacha',
  initialState: {
    items: [] as GachaBanner[],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGacha.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
    });
  },
});

export default gachaSlice.reducer;
