import Host from "../models/Host";

// get : http://localhost:3000/api/hosts
export async function getAllHosts(req, res) {
  try {
    const { nameCity, typeOfAccommodation, priceMin, priceMax, sort, page } =
      req.query;

    const filters = {};
    // Params Query "nameCity"
    if (nameCity) {
      // ".name" key Model Product
      // "i", indique de ne pas être sensible à la Case Maj/minuscule
      // je rajoute une clé "name" à filter qui contiendra une regex basé
      filters.city = new RegExp(nameCity, "i");
    }

    if (typeOfAccommodation) {
      filters.typeCategory = new RegExp(typeOfAccommodation, "i");
    }

    // Params Query "priceMin"
    if (priceMin) {
      filters.price = { $gte: Number(priceMin) };
    }

    // Params Query "priceMax"
    if (priceMax) {
      if (filters.price) {
        filters.price.$lte = Number(priceMax);
      } else {
        filters.price = { $lte: Number(priceMax) };
      }
    }

    // Params Query "price-desc" & "price-asc"
    const sortFilter = {};

    if (sort === "price-asc") {
      sortFilter.price = "asc"; // ou 1 ou "ascending"
    } else if (sort === "price-desc") {
      sortFilter.price = "desc"; // ou -1 ou "descending"
    }

    // // Params Query "limit" résultats
    // const limit = 6;

    // let pageRequired = 1;
    // if (page) pageRequired = Number(page);
    // const skip = (pageRequired - 1) * limit;

    const hosts = await Host.find(filters)
      .sort(sortFilter)
      // .skip(skip)
      // .limit(limit);
    // .select("name price _id")
    if (!hosts) return res.status(404).json({ error: "Data not Found" });

    res.status(200).json(hosts);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

// get : http://localhost:3000/api/hosts/1
// export async function getHost(req, res) {
//   const host = await Host.findById(req.query.id);
//   res.send(host);
// }


export async function getHost(req, res) {
  try {
    const { hostId } = req.query;

    if (hostId) {
      const host = await Host.findById(hostId);
      res.status(200).json(host);
    }
    res.status(404).json({ error: "Hôte not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the Hôte...!" });
  }
}

// post : http://localhost:3000/api/hosts
export async function postHost(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    Host.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// put : http://localhost:3000/api/hosts/id
export async function putHost(req, res) {
  try {
    const { hostId } = req.query;
    const formData = req.body;

    if (hostId && formData) {
      const host = await Host.findByIdAndUpdate(hostId, formData);
      res.status(200).json(host);
    }
    res.status(404).json({ error: "Hôte Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data...!" });
  }
}

// delete : http://localhost:3000/api/hosts/id
export async function deleteHost(req, res) {
  try {
    const { hostId } = req.query;

    if (hostId) {
      const host = await Host.findByIdAndDelete(hostId);
      return res.status(200).json(host);
    }

    res.status(404).json({ error: "Hôte Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the Hôte...!" });
  }
}
