import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartComponent } from './cart.component';
import { CustomerModule } from '../customer/customer.module';
import { DiscountModule } from '../discount/discount.module';

const CartComponents = [CartComponent];

@NgModule({
	declarations: CartComponents,
	imports: [CommonModule, CustomerModule, DiscountModule, FormsModule],
	exports: CartComponents
})

export class CartModule {}