import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory(AppComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.element).toBeTruthy();
  });

  describe('header', () => {
    it('should have a `border-b` class', () => {
      expect(spectator.query('header')).toHaveClass('border-b');
    });
  });
});
