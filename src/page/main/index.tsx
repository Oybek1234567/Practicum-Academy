import { Icons } from "../../assets/Icons";
import "../../style/main/__main.scss"
const Main = () => {
    return (
        <ul className='main'>
            <li className='main__lists'>
                <Icons.lids />
                <p className='main__lists_text'>Lidlar</p>
                <b className='main__lists_price-blue'>102</b>
            </li>
            <li className='main__lists'>
                <Icons.pupils />
                <p className='main__lists_text'>O'quvchilar</p>
                <b className='main__lists_price-blue'>302</b>
            </li>
            <li className='main__lists'>
                <Icons.groups />
                <p className='main__lists_text'>Guruhlar</p>
                <b className='main__lists_price-blue'>302</b>
            </li>
            <li className='main__lists'>
                <Icons.debt />
                <p className='main__lists_text'>Qarzdorlar</p>
                <b className='main__lists_price-red'>302</b>
            </li>
            <li className='main__lists'>
                <Icons.paymentThisMonth />
                <p className='main__lists_text'>Bu oy to'lovlar</p>
                <b className='main__lists_price-blue'>302</b>
            </li>
            <li className='main__lists_long'>
                <Icons.revenue />
                <p className='main__lists_text'>Oylik tushum</p>
                <b className='main__lists_price-green'>35 000 000 so'm</b>
            </li>
            <li className='main__lists_long'>
                <Icons.revenue />
                <p className='main__lists_text'>
                    Rejalashtirilgan oylik tushum
                </p>
                <b className='main__lists_price-yellow'>35 000 000 so'm</b>
            </li>
        </ul>
    );
};

export default Main;
