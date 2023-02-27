// Component of BonMendia's News Crawling. Not yet decided.
import './Layout/layout.css'
import { Transfer } from './Transfer'

const News = () => {
  return (
	<div className='news'>
		<div>
			<h2>Max Lee</h2>
			<Transfer />
			<p>Latest News 1</p>
			<p>Latest News 2</p>
			<a href="/#">See the latest News on BonMedia</a>
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