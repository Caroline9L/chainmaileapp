import { Injectable } from '@angular/core';//EventEmitter, 

import { Weave } from './weave.model';
// import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingService } from '../shopping/shopping.service';

import { Subject } from 'rxjs/Subject';

@Injectable()

export class WeaveService {
	weavesChanged = new Subject<Weave[]>();
	// ringDiameter: number;
	// ringGauge = this.ringGauge;

	private weaves: Weave[] = [
		new Weave(
			'Euro 4-in-1',
			'/assets/img/chainmaile-placeholder.jpg',
			'Classic chainmail weave, also seen in a 6-in-1 variant. Flexible, attractive and effective in a wide variety of ring sizes',
			'http://www.chainmail.com/chainmall/cteach2.htm',
			18,
			.1875,
			4.3
		),
		new Weave(
			'Persian',
			'/assets/img/half-persian-placeholder.jpg',
			'Weave commonly found in jewelry and as the basis of more complicated weaves.',
			'http://www.chainmail.com/chainmall/cteach2.htm',
			18,
			.285,
			4.5
		)
	]; 

	// getRingDiameter(ringGauge) {
	// 	return this.ringGauge
	// 	ringDiameter = 0.005(92 ** ((36 - this.ringGauge) / 39))
	// }


	getWeave() {
		return this.weaves.slice();
	}

	getWeaves(id: number) {
		return this.weaves[id];
	}

	addWeave(weaves: Weave) {
		this.weaves.push(weaves);
		this.weavesChanged.next(this.weaves.slice()); 
	}

}