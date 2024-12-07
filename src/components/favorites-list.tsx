import { FavoritesListProps } from '../props/favorites-list-props.tsx';
import { PlaceCard } from './place-card.tsx';

export function FavoritesList({ favorites }: FavoritesListProps) {
  return (
    <div className="favorites__places">
      {favorites.map((favorite) => (
        <PlaceCard key={favorite.id} offer={favorite} type={'default'} setActiveOfferId={
          function (): void {
            throw new Error('Function not implemented.');
          }
        }
        />
      ))}
    </div>
  );
}
