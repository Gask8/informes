import supabase from "./supabase";

export async function getBatchInforms(options) {
  const { id, seccion, localidad } = options;

  const { data, error } = await supabase
    .from("Individual_Inform")
    .select("*")
    .eq("seccion", seccion)
    .eq("id_batch", id)
    .eq("localidad", localidad)
    .single();

  if (error) {
    console.error(error);
    throw new Error("No se pudo cargar la informacion");
  }

  return data;
}
