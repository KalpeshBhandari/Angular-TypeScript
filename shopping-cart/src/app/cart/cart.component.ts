import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'cart',
	templateUrl: './cart.html'
})

export class CartComponent implements OnInit {
	private cartItems: Array<any>;
	public cartTemplate;

	constructor() {
		this.cartTemplate = {
				itemId: '',
				itemName: '',
				discount: '',
				unitPrice: '',
				qty: ''
			}
	}

	ngOnInit() {
		this.cartItems = [Object.assign({}, this.cartTemplate)];
	}

	private removeItemFromCart(index: number): any {
		this.cartItems.splice(index, 1);
	};

	private addItemToCart(): any {
		this.cartItems.push(Object.assign({}, this.cartTemplate));
	};
}