// ---- Функция для приведения даты к нормальному формату ----
export const updatedDate = (date: string) => {
  return new Date(date).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
}
