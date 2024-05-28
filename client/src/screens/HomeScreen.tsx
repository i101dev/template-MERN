//
import Placeholder from "../Placeholder";
//
function keyInfo_Home() {
    return (
        <section className="section" id="home">
            <div className="keyInfo__container container grid">
                <Placeholder />
                <div className="keyInfo__data">
                    <h1 className="keyInfo__title">
                        KEY <span>INFORMATION</span>
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
function dataPoints_Home() {
    return (
        <section className="section" id="gameplay">
            <h2 className="dataPoints__title">DATAPOINTS</h2>
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
    return (
        <div>
            {keyInfo_Home()}
            {dataPoints_Home()}
        </div>
    );
}
