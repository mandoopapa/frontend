// Component of BonMendia's News Crawling. Not yet decided.
import './Layout/layout.css'
import { Transfer } from './Transfer'

const News = () => {
  return (
	<div className='news'>
		<div>
			<span className='report_title'>Max Lee</span>
			<p>Latest News</p>
			<a href='https://www.bonmedia.kr/news/articleView.html?idxno=456' target='_blank' rel='noreferrer'>레이어2 ‘시바리움’ 기대감에 ‘시바이누’ 소각률 1700% ↑</a>
			<p />
			<a href='https://www.bonmedia.kr/news/articleView.html?idxno=430' target='_blank' rel='noreferrer'>日 게이오 전철, 1020세대 전철 이용 활성화 위해 NFT 발행</a>
			
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
			<h2>Report Name #1</h2>
			<p>Latest News 1</p>
			<p>Latest News 2</p>
			<a href="/#">See the latest News on BonMedia</a>
		</div>
	</div>
  )
}

export default News