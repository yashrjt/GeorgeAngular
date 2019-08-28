import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftcardsComponent } from './giftcards/giftcards.component';



@NgModule({
  declarations: [GiftcardsComponent],
  imports: [
    CommonModule
  ],
  exports:[GiftcardsComponent]
})
export class GiftcardModule { }
