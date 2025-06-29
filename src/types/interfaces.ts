export interface IArticle {
	id: number
	title: string
	summary: string
	content: string
	image: string
	reading_time?: string
  published_date: string; // убираем ?
	author?: string
	avatar?: string
  type: string; // сделать optional (с вопросом)
	comments?: IComment[]
}

export interface IComment {
	name: string
	text: string
	date: string
}
