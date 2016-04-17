var socialShare = require('nativescript-social-share');

import { Component, OnInit } from 'angular2/core';
import { Grocery } from '../../shared/grocery/grocery';
import { GroceryListService } from '../../shared/grocery/grocery-list.service';
import { Router } from 'angular2/router';
import { TextField } from 'ui/text-field';
import { topmost } from 'ui/frame';

@Component({
    selector: 'list',
    templateUrl: 'pages/list/list.html',
    styleUrls: ['pages/list/list-common.css', 'pages/list/list.css'],
    providers: [GroceryListService]
})
export class ListPage implements OnInit {
    groceryList: Array<Grocery> = [];
    grocery: string = "";
    isLoading: boolean = false;

    constructor(private _router: Router, private _groceryListService: GroceryListService) { }

    ngOnInit() {
        this.isLoading = true;
        this._groceryListService.load()
            .subscribe(loadedGroceries => {

                loadedGroceries.forEach((groceryObject) => {
                    this.groceryList.unshift(groceryObject);
                });

                this.isLoading = false;

                var groceryList = topmost().currentPage.getViewById('grocery-list');
                groceryList.animate({
                    opacity: 1,
                    duration: 1000
                });

            }, (error) => {
                alert(error._body.message);
                this._router.navigate(['Login']);
                this.isLoading = false;
            });
    }

    public add(): void {
        if (this.grocery.trim() === '') {
            alert('Enter a grocery item');
            return;
        }

        // Dismiss the keyboard
        var groceryTextField = <TextField>topmost().currentPage.getViewById('grocery');
        groceryTextField.dismissSoftInput();

        this._groceryListService.add(this.grocery)
            .subscribe(
            groceryObject => {
                this.groceryList.unshift(groceryObject);
                this.grocery = '';
            },
            () => {
                alert({
                    message: 'An error ocurred while adding an item to your list',
                    okButtonText: 'OK'
                });
                this.grocery = '';
            }
            );
    }

    public share(): void {
        var list = [],
            i = 0,
            size = this.groceryList.length;

        for (; size--; i++) {
            list.push(this.groceryList[i].name);
        }

        var listString = list.join(', ').trim();
        socialShare.shareText(listString, 'NativeScript Social Share');
    }

    public delete(grocery: Grocery): void {
        this._groceryListService.delete(grocery.id)
            .subscribe(() => {
                var index = this.groceryList.indexOf(grocery);
                this.groceryList.splice(index, 1);
            },
            () => {
                alert({
                    message: 'An error ocurred while removing an item to your list',
                    okButtonText: 'OK'
                });
            }
            );
    }

}