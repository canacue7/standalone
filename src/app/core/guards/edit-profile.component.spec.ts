import { EditProfileComponent } from './edit-profile.component';

describe('EditProfileComponent', () => {
  it('should create and allow deactivation when no changes', () => {
    const comp = new EditProfileComponent();
    expect(comp.canDeactivate()).toBeTrue();
  });
});
