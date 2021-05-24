import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-catechism',
  templateUrl: './catechism.page.html',
  styleUrls: ['./catechism.page.scss'],
})
export class CatechismPage implements OnInit {
  @ViewChild('slides', { static: false }) slides: IonSlides;
  @ViewChild(IonContent) ionContent: IonContent;

  headerCustom = {title: 'Giáo lý 1-12'};
  menuItems = [
    {
      id: 0,
      name: 'Khai tâm',
      list: []
    },
    {
      id: 1,
      name: 'Rước lễ',
      list: []
    },
    {
      id: 2,
      name: 'Thêm sức',
      list: []
    },
    {
      id: 3,
      name: 'Bao đồng',
      list: []
    }
  ];
  currentMenuItemId = this.menuItems[0].id || '';

  slideOptions = {
    initialSlide: 0,
    autoHeight: true
  };

  constructor() { }

  ngOnInit() {
    this.menuItems.forEach(item => {
      const rand = Math.floor(Math.random() * (10 - 1 + 1) + 1);
      for (let i = 0; i < rand; i++) {
        item.list.push({
          name: `${item.name} ${i + 1}`,
          time: '7h30 - 9h30',
          day: 'Chủ nhật hàng tuần',
          room: 'Phòng học 01'
        })
      }
    })
  }

  scrollToTop(value) {
    this.ionContent.scrollToTop(value);
  }

  changeSegment(id) {
    this.slides.lockSwipes(false).then(() => {
      this.slides.slideTo(id).then(() => {
        this.changeSlide(id);
        this.slides.lockSwipes(true);
      });
    })
  }

  changeSlide(id) {
    this.currentMenuItemId = id;
  }

  disableSwipe() {
    this.slides.lockSwipes(true);
  }
}
