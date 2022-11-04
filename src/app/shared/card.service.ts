import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
    providedIn: 'root'
})
export class CardService {
    cards: Card[] = [];
    activeCards: Card[] = [];

    constructor() {}
}
