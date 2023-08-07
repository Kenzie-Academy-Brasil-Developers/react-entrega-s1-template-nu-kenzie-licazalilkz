import image from '../../assets/NuKenzie.png'

export const Header = () => {
    return(
        <header>
            <div className='container'>
                <img src={image} alt="Nu Kenzie" />
            </div>
        </header>
    )
}