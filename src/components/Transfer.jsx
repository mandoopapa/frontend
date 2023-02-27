import Web3 from 'web3';
import './Layout/layout.css'

// 수정전
export function Transfer() {
  const onClickHandler = async () => {
    const web3 = new Web3(
      window?.web3?.currentProvider
      || 'http://localhost:3000'
    );
    const accounts = await web3.eth.requestAccounts();
    const tx = await web3.eth.sendTransaction({
      from: accounts[0],
      to: '0xBBC242c1d7D5605952201D976E71B05b1e025aF3',
      value: web3.utils.toWei('1', 'ether'),
      data: ''
    })
		console.log(tx)
  }

  return (
    <>
      <button className='button' onClick={onClickHandler}>Donate ETH</button>
    </>
  );
}