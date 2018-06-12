FROM postgres

COPY config/postgresql.conf tmp/postgresql/

RUN apt-get update -qq && apt-get install -qq -y -o quiet=1 \
    build-essential \
    git\
    python-dev \
    software-properties-common \
    wget >/dev/null \
    postgis \
    postgresql-9.6-postgis-scripts \
    && rm -rf /var/lib/apt/lists/*

COPY scripts/ docker-entrypoint-initdb.d/
