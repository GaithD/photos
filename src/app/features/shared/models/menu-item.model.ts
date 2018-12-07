
export class Menuitem {


  constructor(public title: string, public path: string, public child: Menuitem[] = [], public active: boolean = false,
              public iconImg: string = '', public iconText: string = '') {

  }

  static resetItemsActive(items: Menuitem[]) {

    return new Promise(function (resolve) {
      items.forEach((item) => {
        item.active = false;
        item.child.forEach((arr) => {
          arr.active = false;
        });
      });
      resolve();
    });
  }


  static markItemActiveFromLink(items: Menuitem[], url: string) {

    Menuitem.resetItemsActive(items).then(() => {
      items.forEach((item) => {
        if (url === item.path) {
          item.active = true;
          return;
        }
        item.child.forEach((arr) => {
          if (url === arr.path) {
            item.active = true;
            arr.active = true;
            return;
          }
        });
      });
    });

  }

}
