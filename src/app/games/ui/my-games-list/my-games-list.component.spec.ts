import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MyGamesListComponent} from './my-games-list.component';
import {By} from "@angular/platform-browser";
import {GAME_STUB, GetGamesStub} from "../../domain/get-games.stub";
import {HttpGetGamesService} from "../../infrastructure/http-get-games.service";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {GamesStore} from "../../application/games.store";
import {of} from "rxjs";

// TODO: (3) Fix test with window
describe('MyGamesListComponent', () => {
  let component: MyGamesListComponent;
  let fixture: ComponentFixture<MyGamesListComponent>;
  let snackbar: MatSnackBar;
  let store: GamesStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MatSnackBarModule],
      declarations: [MyGamesListComponent],
      providers: [
        {
          provide: HttpGetGamesService,
          useClass: GetGamesStub
        },
      ]
    })
      .compileComponents();

    snackbar = TestBed.inject(MatSnackBar);
    store = TestBed.inject(GamesStore);
    spyOnProperty(store, 'selectedGame$', 'get').and.returnValue(
      of(GAME_STUB));
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
    spyOn(snackbar, 'open').and.callThrough();

    const playButton = fixture.debugElement.query(By.css('[data-selector="play-button"]'));

    playButton.nativeElement.click();
    fixture.detectChanges();

    expect(snackbar.open).toHaveBeenCalled();
  });
});
