package fi.academy.react.repositoriot;

import fi.academy.react.models.Kayttaja;
import org.springframework.data.repository.CrudRepository;

public interface KayttajaRepositorio extends CrudRepository<Kayttaja, String> {
    @Override
    void delete(Kayttaja deleted);

}

