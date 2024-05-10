
import PropTypes from 'prop-types';
const NavbarBodySingleData = ({ topicsSingle }) => {
    console.log(topicsSingle);
    const {image_url, category , text_color, background_color, topic } = topicsSingle;
    return (
        <div>

            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={image_url} alt="Shoes" /></figure>
                <div className="card-body rounded-b-2xl " style={{backgroundColor: background_color}}>
                    <h2 className="card-title text-sm w-min py-1 px-2 rounded-sm" style={{color: text_color, backgroundColor: background_color}}>{category}</h2>
                    <p className='font-bold text-xl' style={{color: text_color}}>{topic}</p>
                    
                </div>
            </div>


        </div>
    );
};

NavbarBodySingleData.propTypes = {
    topicsSingle: PropTypes.object,
}

export default NavbarBodySingleData;