import React from 'react';

function Address({ data }) {
	let street, suburb, city, postcode, country;
	if (data !== undefined && data !== null && data.address !== undefined && data.address !== null) {
		let { street, suburb, city, postcode, country } = data.address;
	}
	return (
		<>
			<p className="address">
				{data?.name}
				<br />
				{street ? street : ''}
				{street && <br />}
				{data?.address.suburb} <br />
				{data?.address.city} {data?.address.postcode} <br />
				{data?.address.country}
				<br />
				<span>{data?.phone}</span>
			</p>
		</>
	);
}

export default Address;

/*
function Address() {
    return (
        <>
            <p className="address">
                <span>{name}</span>
                <br />
                <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
            </p>
        </>
    )
}
*/
