export default function getListStudentIds() {
  if (Array.isArray(list)) {
    return list.map((obj) => obj.id);
  }
  return [];
}
