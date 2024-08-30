import './styling.scss'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

export interface Props {
    averagePrice: number;
    rating: 1 | 2 | 3 | 4 | 5;
    ratingCount: number;
    name: string;
    emoji: string;
    onFocus?: () => unknown
    focussed?: boolean
    onBlur?: () => unknown
}

export function InteractiveRestaurantMarker(props: Props) {
  return props.focussed ? (
        <div className='restaurantDetails' onClick={props.onBlur}>
            <header>
                <h1>{props.name}</h1>
                <span className='icon'>{props.emoji}</span>
            </header>
            <div className="rating">
                <Rating value={props.rating} className='ratingStars' />
                <span className='ratingcount'>{props.ratingCount} reviews</span>
            </div>
        </div>
    ) :
    (
        <button className="restaurantPricePreview" onClick={props.onFocus}>€ {props.averagePrice}</button>
    )
}
