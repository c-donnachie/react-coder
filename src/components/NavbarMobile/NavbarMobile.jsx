import s from './NavbarMobile.module.css';
import SearchWidget from '../SearchWidget/SearchWidget';

export default function NavbarMobile() {

    return (
        <nav>
            <div className={s.container}>

            
                <SearchWidget />


            </div>
        </nav>
    )
}
