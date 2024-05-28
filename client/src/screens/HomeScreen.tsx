//
import Placeholder from "../Placeholder";
//
function home_key1(id: string) {
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
function home_data1(id: string) {
    return (
        <section className="section" id={id}>
            <h2 className="dataPoints__title">DATAPOINTS 1</h2>
            <div className="dataPoints__container container grid">
                <Placeholder />
                <ul className="dataPoints__list">
                    <li className="dataPoints__item">
                        <i className="ri-checkbox-fill"></i>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                            ratione magni voluptas?
                        </p>
                    </li>
                    <li className="dataPoints__item">
                        <i className="ri-checkbox-fill"></i>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Illum non expedita dicta amet voluptate modi quibusdam fuga
                            ipsum.
                        </p>
                    </li>
                    <li className="dataPoints__item">
                        <i className="ri-checkbox-fill"></i>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                            architecto exercitationem id aut nobis totam.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
function home_key2(id: string) {
    return (
        <section className="section" id={id}>
            <div className="keyInfo__container container grid">
                <Placeholder />
                <div className="keyInfo__data">
                    <h1 className="keyInfo__title">
                        KEY2 <span>INFORMATION</span>
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
function home_data2(id: string) {
    return (
        <section className="section" id={id}>
            <h2 className="dataPoints__title">DATAPOINTS 2</h2>
            <div className="dataPoints__container container grid">
                <Placeholder />
                <ul className="dataPoints__list">
                    <li className="dataPoints__item">
                        <i className="ri-checkbox-fill"></i>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                            ratione magni voluptas?
                        </p>
                    </li>
                    <li className="dataPoints__item">
                        <i className="ri-checkbox-fill"></i>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Illum non expedita dicta amet voluptate modi quibusdam fuga
                            ipsum.
                        </p>
                    </li>
                    <li className="dataPoints__item">
                        <i className="ri-checkbox-fill"></i>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                            architecto exercitationem id aut nobis totam.
                        </p>
                    </li>
                </ul>
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
            {home_key1("key1")}
            {home_data1("data1")}
            {home_key2("key2")}
            {home_data2("data2")}
        </div>
    );
}
