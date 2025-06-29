import { getArticleLink } from '@/lib/utils';
import type { IArticle } from '@/types/interfaces';

interface ArticleCardMediumProps {
	article: IArticle;
}

const ArticleCardMedium: React.FC<ArticleCardMediumProps> = ({ article }) => {
	return (
		<a
			href={getArticleLink(article)}
			className="block group overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 bg-white"
		>
			{/* Картинка сверху */}
			<div className="relative w-full h-60 overflow-hidden">
				<img
					src={article.image}
					alt={article.title}
					className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
				/>

				{/* Бейдж типа */}
				<div className="absolute top-3 left-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
					{article.type}
				</div>
			</div>

			{/* Текст под картинкой */}
			<div className="p-5">
				<h3 className="text-xl font-extrabold text-gray-900 group-hover:text-violet-600 transition-colors duration-300">
					{article.title}
				</h3>

				<p className="mt-2 text-gray-600 text-base line-clamp-2 leading-snug">
					{article.summary}
				</p>

				<p className="mt-3 text-sm text-gray-400">
					{new Date(article.published_date ?? '').toLocaleDateString()}
				</p>
			</div>

			{/* Нижняя полоса при ховере */}
			<div className="h-1 w-full bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
		</a>
	);
};

export default ArticleCardMedium;
