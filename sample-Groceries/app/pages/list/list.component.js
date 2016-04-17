"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var socialShare = require('nativescript-social-share');
var core_1 = require('angular2/core');
var grocery_list_service_1 = require('../../shared/grocery/grocery-list.service');
var router_1 = require('angular2/router');
var frame_1 = require('ui/frame');
var ListPage = (function () {
    function ListPage(_router, _groceryListService) {
        this._router = _router;
        this._groceryListService = _groceryListService;
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = false;
    }
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this._groceryListService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            var groceryList = frame_1.topmost().currentPage.getViewById('grocery-list');
            groceryList.animate({
                opacity: 1,
                duration: 1000
            });
        }, function (error) {
            alert(error._body.message);
            _this._router.navigate(['Login']);
            _this.isLoading = false;
        });
    };
    ListPage.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === '') {
            alert('Enter a grocery item');
            return;
        }
        // Dismiss the keyboard
        var groceryTextField = frame_1.topmost().currentPage.getViewById('grocery');
        groceryTextField.dismissSoftInput();
        this._groceryListService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = '';
        }, function () {
            alert({
                message: 'An error ocurred while adding an item to your list',
                okButtonText: 'OK'
            });
            _this.grocery = '';
        });
    };
    ListPage.prototype.share = function () {
        var list = [], i = 0, size = this.groceryList.length;
        for (; size--; i++) {
            list.push(this.groceryList[i].name);
        }
        var listString = list.join(', ').trim();
        socialShare.shareText(listString, 'NativeScript Social Share');
    };
    ListPage.prototype.delete = function (grocery) {
        var _this = this;
        this._groceryListService.delete(grocery.id)
            .subscribe(function () {
            var index = _this.groceryList.indexOf(grocery);
            _this.groceryList.splice(index, 1);
        }, function () {
            alert({
                message: 'An error ocurred while removing an item to your list',
                okButtonText: 'OK'
            });
        });
    };
    ListPage = __decorate([
        core_1.Component({
            selector: 'list',
            templateUrl: 'pages/list/list.html',
            styleUrls: ['pages/list/list-common.css', 'pages/list/list.css'],
            providers: [grocery_list_service_1.GroceryListService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, grocery_list_service_1.GroceryListService])
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFFdkQscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELHFDQUFtQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQy9FLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLHNCQUF3QixVQUFVLENBQUMsQ0FBQTtBQVFuQztJQUtJLGtCQUFvQixPQUFlLEVBQVUsbUJBQXVDO1FBQWhFLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBSnBGLGdCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUNqQyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFFNkQsQ0FBQztJQUV6RiwyQkFBUSxHQUFSO1FBQUEsaUJBc0JDO1FBckJHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUU7YUFDMUIsU0FBUyxDQUFDLFVBQUEsZUFBZTtZQUV0QixlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsYUFBYTtnQkFDbEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUV2QixJQUFJLFdBQVcsR0FBRyxlQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3BFLFdBQVcsQ0FBQyxPQUFPLENBQUM7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDO2dCQUNWLFFBQVEsRUFBRSxJQUFJO2FBQ2pCLENBQUMsQ0FBQztRQUVQ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