package fi.academy.react.kontrollerit;

import fi.academy.react.models.Kayttaja;
import fi.academy.react.repositoriot.KayttajaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class KayttajaKontrolleri {

    @Autowired
    KayttajaRepositorio kayttajaRepositorio;



    @GetMapping("/contacts")
    public Iterable<Kayttaja> contact() {
        return kayttajaRepositorio.findAll();
    }

    @PostMapping("/contacts")
    public Kayttaja save(@RequestBody Kayttaja contact) {
        kayttajaRepositorio.save(contact);
        return contact;
    }

    @GetMapping("/contacts/{id}")
    public Optional<Kayttaja> show(@PathVariable String id) {
        return kayttajaRepositorio.findById(id);
    }

    @PutMapping("/contacts/{id}")
    public Kayttaja update(@PathVariable String id, @RequestBody Kayttaja contact) {
        Optional<Kayttaja> optcontact = kayttajaRepositorio.findById(id);
        Kayttaja uusi = optcontact.get();
        if(contact.getName() != null)
            uusi.setName(contact.getName());
        if(contact.getAddress() != null)
            uusi.setAddress(contact.getAddress());
        if(contact.getCity() != null)
            uusi.setCity(contact.getCity());
        if(contact.getPhone() != null)
            uusi.setPhone(contact.getPhone());
        if(contact.getEmail() != null)
            uusi.setEmail(contact.getEmail());
        kayttajaRepositorio.save(uusi);
        return uusi;
    }

    @DeleteMapping("/contacts/{id}")
    public String delete(@PathVariable String id) {
        Optional<Kayttaja> optcontact = kayttajaRepositorio.findById(id);
        Kayttaja contact = optcontact.get();
        kayttajaRepositorio.delete(contact);
        return "";
    }
}


//
//
//    // hae kaikki käyttäjät
//    @GetMapping("/kayttajat")
//    public Iterable<Kayttaja> contact() {
//        return kayttajaRepositorio.findAll();
//    }
//
//    // hae yksi käyttäjä
//
//    @GetMapping("/kayttajat")
//    public Optional<Kayttaja> show(@PathVariable String id) {
//        return kayttajaRepositorio.findById(id);
//    }
//
//    // lisää uusi käyttäjä
//    @PostMapping("/contacts")
//    public Kayttaja save(@RequestBody Kayttaja contact) {
//        kayttajaRepositorio.save(contact);
//        return contact;
//    }
//
//    // muokkaa käyttäjää
//    @PutMapping("/kayttajat/{id}")
//    public Kayttaja update(@PathVariable String id, @RequestBody Kayttaja yhteystieto) {
//        Optional<Kayttaja> optyhteystieto = kayttajaRepositorio.findById(id);
//        Kayttaja kayttaja = optyhteystieto.get();
//        if(yhteystieto.getName() != null)
//            kayttaja.setName(yhteystieto.getName());
//        if(yhteystieto.getAddress() != null)
//            kayttaja.setAddress(yhteystieto.getAddress());
//        if(yhteystieto.getCity() != null)
//            kayttaja.setCity(yhteystieto.getCity());
//        if(yhteystieto.getPhone() != null)
//            kayttaja.setPhone(yhteystieto.getPhone());
//        if(yhteystieto.getEmail() != null)
//            kayttaja.setEmail(yhteystieto.getEmail());
//        kayttajaRepositorio.save(kayttaja);
//        return kayttaja;
//    }
//
//   @DeleteMapping("/kayttajat/{id}")
//    public String delete(@PathVariable String id) {
//        Optional<Kayttaja> optyhteystieto = kayttajaRepositorio.findById(id);
//        Kayttaja kayttaja = optyhteystieto.get();
//        kayttajaRepositorio.delete(kayttaja);
//
//        return "";
//    }
