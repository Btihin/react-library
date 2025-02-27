# react-knihovna

Interní knihovna pro funkce a komponenty, které mohou být používané napříč projekty.


## Instalace

Pro instalaci je nutné mezi adresy pro stahování balíčků přidat adresu na tento package registr.
Následně je možné balíček stáhnout

## Obsah

Knihovna obsahuje funkce a komponentu pro formátování hodnot přijatých z API.

## Jak se knihovna používá

Po instalaci je nutné v daném souboru naimportovat balíček

```typescript
import { ListItemDetail } from '@org/react-library';
```

Následně lze použít

```typescript
<ListItemDetail
    nacitani={isLoading}
    popisek={'Datum vytvoření'}
    text={data?.vytvoreniDatum}
    sirka={110}
    typ='datum'
/>
```

## API

### List item detail

`<ListItemDetail />`

```typescript
  children?: React.ReactNode;
  nacitani: boolean;
  sirka: number;
  text: unknown;
  popisek: string;
  typ: DataType;
```

### Get value from api

`getValueFromApi()`

```typescript
  value: unknown;
  typ: DataType;
```

### Datatype

```typescript
type DataType = 'text' | 'cislo' | 'boolean' | 'datum' | 'datumCas';
```