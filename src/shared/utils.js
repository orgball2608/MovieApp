import { IMAGE_URL } from './constants'
import { EMBED_URL } from './constants'

export const resizeImage = (imageUrl, width = 'original') => `${IMAGE_URL}/${width}${imageUrl}`

export const embedMovie = (id) => `${EMBED_URL}/movie?tmdb=${id}`

export const embedTV = (id, season, episode) => `${EMBED_URL}/series?tmdb=${id}&sea=${season}&epi=${episode}`
