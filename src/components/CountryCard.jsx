export const CountryCard = ({ country }) => {
    return (
        <article>
            <header>
                <img src={country?.flags.svg} alt={country?.flags.alt} />
            </header>

            <h2>{country?.name.common}</h2>

            <ul>
                <li>Capital: {country?.capital}</li>
                <li>Población: {country?.population}</li>
                <li>Continente: {country?.subregion}</li>
                <li>Area Geográfica: {country?.area}</li>
            </ul>
        </article>
    )
}
