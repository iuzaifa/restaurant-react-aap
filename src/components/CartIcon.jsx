import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { useCart } from '../hooks/useCart';

const CartIcon = ({ onClick }) => {
    const { cartCount } = useCart();

    return (
        <div className="relative">
            <Button
                variant="icon"
                icon={ShoppingCart}
                onClick={onClick}
                className="relative"
            />
            {cartCount > 0 && (
                <div className="absolute -top-1 -right-1">
                    <Badge variant="cart" className="w-5 h-5 flex items-center justify-center font-bold text-xs">
                        {cartCount}
                    </Badge>
                </div>
            )}
        </div>
    );
};

export default CartIcon;