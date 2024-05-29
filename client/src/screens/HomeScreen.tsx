//
import Placeholder from "../Placeholder";
//
function home_key(id: string) {
    return (
        <section className="section" id={id}>
            <div className="keyInfo__container container grid">
                <Placeholder />
                <div className="keyInfo__data">
                    <h1 className="keyInfo__title">
                        KEY1 <span>INFORMATION</span>
                    </h1>
                    <p className="keyInfo__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
                        aspernatur enim provident, dignissimos itaque expedita.
                    </p>
                </div>
            </div>
        </section>
    );
}
function home_data(id: string) {
    return (
        <section className="section" id={id}>
            <div className="dataPoints__container container grid">
                <Placeholder />
                <div className="dataPoints__data">
                    <h1 className="dataPoints__title">
                        DATA <span>POINTS</span>
                    </h1>
                    <ul className="dataPoints__list">
                        <li className="dataPoints__item">
                            <i className="ri-checkbox-fill"></i>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Hic ratione magni voluptas?
                            </p>
                        </li>
                        <li className="dataPoints__item">
                            <i className="ri-checkbox-fill"></i>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Illum non expedita dicta amet voluptate modi quibusdam
                                fuga ipsum.
                            </p>
                        </li>
                        <li className="dataPoints__item">
                            <i className="ri-checkbox-fill"></i>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Alias architecto exercitationem id aut nobis totam.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
//
//
export default function HomeScreen() {
    //
    return (
        <div>
            {home_key("key1")}
            {home_data("data1")}
            {home_key("key2")}
            {home_data("data2")}
        </div>
    );
}
