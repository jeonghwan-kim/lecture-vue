const data = [
  {
    id: 1,
    name: "비건 샐러드",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "수제 햄버거",
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  }
}