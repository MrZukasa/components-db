const Create = () => {
    return (
        <div className="container" class="content">
            <form class="mt-5">
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="ID" class="peer"/>
                    <label for="ID">ID</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="codice" class="peer"/>
                    <label for="codice">Codice</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="codiceCostruttore" class="peer"/>
                    <label for="codice">Codice Costruttore</label>
                </div>
                <div class="grid xl:grid-cols-2 xl:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="descrizione" class="peer" placeholder=" "/>
                        <label for="codice">Descrizione</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="quantita" class="peer" placeholder=" "/>
                        <label for="codice">Quantità</label>
                    </div>
                </div>
                <div class="grid xl:grid-cols-3 xl:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore1" class="peer" placeholder=" "/>
                        <label for="codice">Primo rivenditore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore2" class="peer" placeholder=" "/>
                        <label for="codice">Secondo rivenditore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore3" class="peer" placeholder=" "/>
                        <label for="codice">Terzo rivenditore</label>
                    </div>
                </div>
                <button type="submit" class="text-white bg-violet-500 hover:bg-violet-700 focus:ring-1 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center">Aggiungi</button>
            </form>
        </div>
    );
}
 
export default Create;