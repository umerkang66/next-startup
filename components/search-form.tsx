import Form from 'next/form';
import { SearchFormReset } from './search-form-reset';
import { Search } from 'lucide-react';
import { Button } from './ui/button';

export function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search for startups."
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <Button type="submit" className="search-btn text-white">
          <Search />
        </Button>
      </div>
    </Form>
  );
}
