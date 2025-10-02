export interface Guest {
  id: string;
  firstname: string;
  lastname: string;
  are_you_coming: boolean;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      guests: {
        Row: Guest;
        Insert: Omit<Guest, "id" | "created_at">;
        Update: Partial<Omit<Guest, "id" | "created_at">>;
      };
    };
  };
}
