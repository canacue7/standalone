import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../core/services/products';
import { loadProducts, loadProductsSuccess, loadProductsFailure } from './products.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProductsEffects {
  // use functional inject() to avoid runtime injection-token inference issues
  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  load$ = createEffect(() =>
    // cast to any to avoid multi-rxjs-package type incompatibilities during compilation
    (this.actions$ as any).pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((res) => loadProductsSuccess({ products: res?.items ?? res })),
          catchError((err) => of(loadProductsFailure({ error: err })))
        )
      )
    )
  );
}
