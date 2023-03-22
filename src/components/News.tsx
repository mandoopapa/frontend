// Component of BonMendia's News Crawling. Not yet decided.
import './Layout/layout.css'
import { Transfer } from './Transfer'

function News() {
  return (
	<div className='news'>
		<div>
			<span className='report_title'>Max Lee</span>
			<p>Latest News</p>
			<a href='https://www.bonmedia.kr/news/articleView.html?idxno=456' target='_blank' rel='noreferrer'>칠리즈, 14일 칠리즈 토큰 홀더 대상 밋업 개최</a>
			<p />
			<a href='https://www.bonmedia.kr/news/articleView.html?idxno=430' target='_blank' rel='noreferrer'>유가랩스, 비트코인 NFT 트웰브폴드 시리즈 완판</a>
			<p />
			<a href="https://www.bonmedia.kr/news/articleList.html?sc_area=A&view_type=sm&sc_word=%EC%9D%B4%EC%9E%AC%EC%84%B1" target='_blank' rel='noreferrer'>See the latest News on BonMedia</a>
			<p />
			<Transfer />
		</div>

		<div>
			<h2>Vincent Hong</h2>
			<p>Latest News 1</p>
			<p>Latest News 2</p>
			<a href="/#">See the latest News on BonMedia</a>
		</div>

		<div>
			<h2>...</h2>
			<p>Latest News 1</p>
			<p>Latest News 2</p>
			<a href="/#">See the latest News on BonMedia</a>
		</div>
	</div>
  )
}

export default News