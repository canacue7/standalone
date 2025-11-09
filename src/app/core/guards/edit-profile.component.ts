import { CanComponentDeactivate } from "./can-deactive.guard";

export class EditProfileComponent implements CanComponentDeactivate {
  hasChanges = false;
  canDeactivate(): boolean {
    if (!this.hasChanges) return true;
    return confirm('Tienes cambios sin guardar. ¿Salir igual?');
  }
}
