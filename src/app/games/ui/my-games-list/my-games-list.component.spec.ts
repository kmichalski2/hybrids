import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MyGamesListComponent} from './my-games-list.component';
import {By} from "@angular/platform-browser";
import {GET_GAMES_SERVICE} from "../../domain/get-games";
import {GetGamesStub} from "../../domain/get-games.stub";

describe('MyGamesListComponent', () => {
  let component: MyGamesListComponent;
  let fixture: ComponentFixture<MyGamesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MyGamesListComponent],
      providers: [
        {
          provide: GET_GAMES_SERVICE,
          useClass: GetGamesStub
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to steam', () => {
    fixture.debugElement.query(By.css('[data-selector="play-button"]'));
    fixture.detectChanges();
  });
});
