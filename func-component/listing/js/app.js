'use strict';

function init() {

  const Listing = ({ items }) => {
    if (!items.length) {
      return null;
    }

    const Image = ({ href, src }) => {
      return (
        <div className="item-image">
          <a href={ href } >
            <img src={ src } />
          </a>
        </div>
      )
    }

    const Details = ({ title, code, price, quantity }) => {
      return (
        <div className="item-details">
          <p className="item-title">{ title }</p>
          { (code === 'USD') && <p className="item-price">${ price }</p> }
          { (code === 'EUR') && <p className="item-price">€{ price }</p> }
          { (code !== 'USD' && code !== 'EUR') && <p className="item-price">{ price } { code }</p> }
          { (quantity <= 10) && <p className="item-quantity level-low">{ quantity } left</p> }
          { (10 < quantity && quantity <= 20) && <p className="item-quantity level-medium">{ quantity } left</p> }
          { (quantity > 20) && <p className="item-quantity level-high">{ quantity } left</p> }
        </div>
      )  
    }

    return (
      <div className="item-list">
        { items.map((item) => <div className="item" key={ item.listing_id }>
                                <Image href={ item.url } src={ item.MainImage.url_570xN } />
                                <Details title={ item.title } code={ item.currency_code } price={ item.price } quantity={item.quantity} />
                              </div>) }
      </div>
    )
  }
  
  Listing.defaultProps = {
    items: []
  }

  fetch('https://neto-api.herokuapp.com/etsy', {method: 'GET'})
    .then(res => res.json())
      .then(res => {
        const listing = <Listing items={res} />;
        ReactDOM.render(listing, document.getElementById('root'));
      })
        .catch(e => {
          console.log(e.message);
        });
}

init();