
async function searchYTVideos() {
  const searchText = document.getElementById('search-text').value
  const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${searchText}&type=video&maxResults=20&videoDuration=long`

  try {
    const res = await fetch(API_URL)
    const data = await res.json()
    displayVideos(data)
  } catch (error) {
    console.log(error)
  }
}

function displayVideos(data) {
  const videosList = document.getElementById('videos-list')
  videosList.innerHTML = ''

  data.items.forEach((video) => {
    const colDiv = document.createElement('div')
    colDiv.classList.add('col-xl-4', 'col-lg-6', 'col-md-12', 'text-center')

    const iframe = document.createElement('iframe')
    iframe.width = 400
    iframe.height = 225

    const { videoId } = video.id
    iframe.src = `https://www.youtube.com/embed/${videoId}`
    iframe.allow = allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    iframe.setAttribute('allowfullscreen', 'true')

    colDiv.append(iframe)
    videosList.append(colDiv)
  })
}

/* 
  <div class="col-xl-4 col-lg-6 col-md-12 text-center">
    <iframe 
    width="400" 
    height="225" 
    src="https://www.youtube.com/embed/1Se2zTlXDwY" title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
*/




/*
  # FETCH VIA PROISE HANDLING
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log('something went wrong', error))
*/ 