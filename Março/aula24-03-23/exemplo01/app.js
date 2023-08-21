const getPosts = async () => {
  const apiResponse = await fetch('http://localhost:3000/carros')
  const posts = await apiResponse.json()
  console.log(posts)
}

const createPost = async (post) => {
  await fetch("http://localhost:3000/carros", {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });
}

const addPost = async () => {
  const post = {
    "id": "1",
    "nome": 'Compass',
    "marca": 'Jeep',
    "aro": '17',
    "portas": '4',
    "combustivel": 'Diesel'
  }

  await createPost(post)
}