const getInitialData = () => ([
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: '2023-12-01T04:27:34.572Z',
    archived: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: '2023-12-01T04:27:34.572Z',
    archived: false,
  },
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
