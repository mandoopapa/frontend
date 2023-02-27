// Introduction of BonMedia.
import './Layout/layout.css'
import KU from './banner.jpg';

export function Introduction() {

	return (
		<>
			<div className='intro'>
				<h2>Meet BonMedia Reporter directly with Web 3</h2>
			</div>

			<div>
				<img src={KU} height="200px" alt='KU'></img> 
				<span>Support Reporter with Cryptocurrency</span>
			</div>
		</>
	)
}