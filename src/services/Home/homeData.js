import { useGetHomeApiQuery } from './home.service'
export const getHomePageData = async () => {
  const endpoints = {
    Trending: '/trending/movie/day',
    'Now Playing': '/movie/now_playing',
    Popular: '/movie/popular',
    'Top Rated': '/movie/top_rated',
    Upcoming: '/movie/upcoming'
  }

  const res = await Promise.all(
    Object.keys(endpoints).map((key) => {
      return useGetHomeApiQuery(endpoints[key])
    })
  )
  const data = res.reduce((final, curr, index) => {
    const { data } = curr
    if (data === undefined) {
      final[Object.keys(endpoints)[index]] = {
        data: []
      }
    } else {
      final[Object.keys(endpoints)[index]] = {
        data: curr.data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          vote_average: movie.vote_average,
          release_date: movie.release_date,
          original_language: movie.original_language,
          backdrop_path: movie.backdrop_path
        }))
      }
    }

    return {
      ...final,
      media_type: 'movie'
    }
  }, {})
  return data
}

export const getDetailsMovie = async (movies) => {
  const res = await Promise.all(
    movies.map((movie) => {
      return useGetHomeApiQuery(`/movie/${movie.id}`)
    })
  )
  const translationRes = await Promise.all(
    movies.map((movie) => {
      return useGetHomeApiQuery(`/movie/${movie.id}/translations`)
    })
  )

  const translations = translationRes.map((item) =>
    item.data.translations
      .filter((translation) => ['vi', 'fr', 'ja', 'pt', 'ru', 'es'].includes(translation.iso_639_1))
      .reduce((acc, element) => {
        if (element.iso_639_1 === 'vi') {
          return [element, ...acc]
        }
        return [...acc, element]
      }, [])
      .map((translation) => translation.data.title)
  )
  const genres = res.map((item) => item.data.genres.filter((value, index) => index < 3))

  return genres.map((genre, index) => ({
    genre,
    translation: translations[index]
  }))
}
